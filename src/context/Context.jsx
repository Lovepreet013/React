import React, { useContext } from 'react';

const translationStore = {
  de: {
    greeting: 'Guten Tag!',
    headline: 'Heute lernen wir, wie Context funktioniert.',
  },
  en: {
    greeting: 'Hello!',
    headline: 'Today we will learn how Context works.',
  },
};

const defaultLanguage = 'de';

const defaultLanguageContextValue = {
  availableLanguages: Object.keys(translationStore),
  changeLanguage: () => {
    console.warn('Funktion changeLanguage() nicht implementiert!');
  },
  language: defaultLanguage,
  translations: translationStore[defaultLanguage],
};

const LanguageContext = React.createContext(defaultLanguageContextValue);

class Localized extends React.Component {

  changeLanguage = (newLanguage) => {
    this.setState((state) => ({
      translations: translationStore[newLanguage],
      language: newLanguage,
    }));
  };

  state = {
    ...defaultLanguageContextValue,
    changeLanguage: this.changeLanguage,
  };

  render() {
    return (
      <LanguageContext.Provider value={this.state}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

const Greeting = () => (
  <LanguageContext.Consumer>
    {(contextValue) => contextValue.translations.greeting}
  </LanguageContext.Consumer>
);

const Headline = () => (
  <LanguageContext.Consumer>
    {(contextValue) => contextValue.translations.headline}
  </LanguageContext.Consumer>
);

const LanguageSelector = () => {
  return (
    <LanguageContext.Consumer>
      {(contextValue) => (
        <select
          onChange={(event) => {
            contextValue.changeLanguage(event.target.value);
          }}
        >
          {contextValue.availableLanguages.map((language) => (
            <option value={language}>{language}</option>
          ))}
        </select>
      )}
    </LanguageContext.Consumer>
  );
};

const ContextComponent = () => (
  <Localized>
    <LanguageSelector />
    <p>
      <Greeting />
    </p>
    <p>
      <Headline />
    </p>

    <div>
      <Selector/>
      <Greet/>
      <Head/>
    </div>
  </Localized>
);

export default ContextComponent;

//Another implementation of context.Consumer using useContext
export const Selector = () => {
  const lang = useContext(LanguageContext)
  return(
    <select onChange={(event) => {lang.changeLanguage(event.target.value)}}>
      {lang.availableLanguages.map((language) => (
        <option key={language} value={language}>{language}</option>
      ))}
    </select>
  )
}

export const Greet = () => {
  const lang = useContext(LanguageContext)
  return (
    <p>{lang.translations.greeting}</p>
  )
}

export const Head = () => {
  const lang = useContext(LanguageContext)
  return (
    <p>{lang.translations.headline}</p>
  )
}
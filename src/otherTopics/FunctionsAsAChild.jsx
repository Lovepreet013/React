import React from "react"

const bold = (string) => {
    return <strong>{string}</strong>
}

const italic = (string) => {
    return <em>{string}</em>
}

const Formatter = (props) => {
    if(typeof props.children !== "function"){
        console.warn('children props must be a function!')
        return null
    }

    return props.children({bold, italic})
}
export class FaaC extends React.Component{
    render(){
        return(
            <div>
                <p>This text does not know about the Formatter Component.</p>
                <Formatter>{({bold}) => <p>This text {bold("does though")}.</p>}</Formatter>
                <Formatter children={({italic}) => <p>This text does know how to be {italic("italic")}.</p>}/>
            </div>
        )
    }
}

//Crypto example with Function as a child:
//PriceTable component will remain same as the previous example but the way we provide data to this will be different from previous example
const PriceTable = ({ isLoading, items, loadData }) => {
    if (isLoading) {
        return <p>Prices are being loaded. Please wait.</p>;
    }

    if (!items || items.length === 0) {
        return (
            <p>
                No data available. <button onClick={loadData}>Try again!</button>
            </p>
        );
    }

    return (
        <table>
            {items.map((item) => (
                <tr key={item.id}>
                    <td>
                        {item.name} ({item.symbol})
                    </td>
                    <td>EUR {item.current_price}</td>
                </tr>
            ))}
            <tr>
                <td colSpan="2">
                    <button onClick={loadData}>Reload</button>
                </td>
            </tr>
        </table>
    );
};

class CryptoPrices extends React.Component{
    state = {
        isLoading : true,
        items : []
    }

    componentDidMount(){
        this.loadData()
    }
    loadData = async () => {
        this.setState(() => ({
          isLoading: true,
        }));
        const { limit } = this.props;
        try {
          const cryptoTicker = await fetch(
            'https://ed-6544990369349632.educative.run:3000' +
            '/api/v3/coins/markets?vs_currency=eur&per_page=' +
            limit.toString()
        );
        const cryptoTickerResponse = await cryptoTicker.json();
        this.setState(() => ({
          isLoading: false,
          items: cryptoTickerResponse,
        }));
      } catch (err) {
        this.setState(() => ({
          isLoading: false,
        }));
      }
    };

    render(){
        const {isLoading, items} = this.state
        const {children} = this.props

        if(typeof children !== "function"){
            return null
        }

        return children({isLoading, items, loadData : this.loadData})
    }
}

export default class FaaChild extends React.Component{
    render(){
        return(
            <CryptoPrices limit={5}> {(props) => <PriceTable {...props}/>} </CryptoPrices>
        )
    }
}
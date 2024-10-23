import { useState } from "react"
import { useBackgroundColor } from "./useBackgroundColor"

const DefaultContent = () => {
    return <p>Default Content</p>
}

const SpecialContent = () => {
    useBackgroundColor("red")
    return <p>Special Content</p>
}

const OtherSpecialContent = () => {
    useBackgroundColor('orange');
    return <p>Other Special Content</p>;
};

export const Tabs = () => {
    const [tab, setTab] = useState('home')

    return (
        <div className="tabs">
          <div className="tabBar">
            <button onClick={() => setTab('home')}>Home</button>
            <button onClick={() => setTab('special')}>Special</button>
            <button onClick={() => setTab('other')}>Other Special</button>
          </div>
          <div className="tabContent">
            {tab === 'home' && <DefaultContent />}
            {tab === 'special' && <SpecialContent />}
            {tab === 'other' && <OtherSpecialContent />}
          </div>
        </div>
    );
}
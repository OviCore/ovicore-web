import React from 'react';
import Hero from './components/Hero.tsx';
import Questions from './components/Questions.tsx';
import Product from './components/Product.tsx';
import ImageView from './components/ImageView.tsx';
import { CSSProperties } from 'react';
import Features from './components/Features.tsx';


export default function Home() {
    return (
        <div style={styles.container}>
            <Hero  />
            <ImageView />
            <Product />
            <Features />
            <Questions />
        </div>
    );
}

const styles: { [key: string]: CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden', // Add this line
    },
};
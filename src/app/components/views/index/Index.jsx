import React, { Fragment } from 'react';
import { Anchor, Image, List, Item, Div } from './styles';
import { categories } from './db.json';
import { ListOfPhotoCards } from '../../ListOfPhotoCard';
import { Logo } from '../../Logo';
import { useEffect } from 'react';
import { useState } from 'react';

export const Category = ({ cover = '?', path = '?', emoji = '?' }) => (
    <Anchor href={path}>
        <Image src={cover} />
        {emoji}
    </Anchor>
)

const renderList = (fixed) => (
    <List fixed={fixed}>
        {categories.map(category => <Item key={category.id}><Category /*cover={category.cover} path={category.path} emoji={category.emoji}*/ {...category} /></Item>)}
    </List>
)

export const ListOfCategories = () => {
    
const [showFixed,setShowFixed] = useState(false);

useEffect(function () {
    const onScroll = e  =>{
        const newShowFixed = window.scrollY > 200
        showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return() => document.removeEventListener('scroll', onScroll)
},[showFixed])


    return (
        <Fragment>
        {renderList()}
        {showFixed && renderList(true)}
        </Fragment>
    )
}

const Home = () => {
    return (
        <Div>
            <Logo />
            <ListOfCategories />
            <ListOfPhotoCards />
        </Div>
    )
}

export default Home
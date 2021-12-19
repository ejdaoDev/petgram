import React from 'react';
import { Anchor, Image, List, Item } from './styles';
import { categories } from './db.json';
import { ListOfPhotoCards } from '../../ListOfPhotoCard';
import { Logo } from '../../Logo';

export const Category = ({ cover = '?', path = '?', emoji = '?' }) => (
    <Anchor href={path}>
        <Image src={cover} />
        {emoji}
    </Anchor>
)

export const ListOfCategories = () => {
    return (
        <List>
            {categories.map(category => <Item key={category.id}><Category cover={category.cover} path={category.path} emoji={category.emoji} /></Item>)}
        </List>
    )
}

const Home = () => {
    return (
        <div>
            <Logo />
            <ListOfCategories />
            <ListOfPhotoCards />
        </div>
    )
}

export default Home
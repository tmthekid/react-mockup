import { FC } from 'react';
import { FlexboxGrid } from 'rsuite';
import { Header } from '../../components/header/Header';
import { Link } from 'react-router-dom';
import { Card } from '../../components/card/Card';
import classes from './TemplateLibrary.module.scss';

const agreements: Array<{to: string, name: string}> = [
    {
        to: '/file.pdf', name: 'Legal Document #1'
    },
    {
        to: '/file.pdf', name: 'Legal Document #2'
    },
    {
        to: '/file.pdf', name: 'Legal Document #3'
    },
    {
        to: '/file.pdf', name: 'Legal Document #4'
    }
]

const resolutions: Array<{to: string, name: string}> = [
    {
        to: '/file.pdf', name: 'Legal Document #1'
    },
    {
        to: '/file.pdf', name: 'Legal Document #2'
    }
]

const courtesies: Array<{to: string, name: string}> = [
    {
        to: '/file.pdf', name: 'Legal Document #1'
    },
    {
        to: '/file.pdf', name: 'Legal Document #2'
    },
    {
        to: '/file.pdf', name: 'Legal Document #3'
    }
]

const TemplateLibrary:FC = () => {
    return (
        <>
            <Header title="Legal Documents" tagline="Download our most common forms below and save time getting your issue resolved" />
            <Card>
                <FlexboxGrid className={ classes.row }>
                    <FlexboxGrid.Item className={ classes.column }>
                        <h2>Agreement</h2>
                        <p>Select a document to download</p>
                        { agreements.map(a => <Link key={a.name} to="/file.pdf" target="_blank" download>{ a.name }</Link>) }
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item className={classes.column}>
                        <h2>Resolution</h2>
                        <p>Select a document to download</p>
                        { resolutions.map(a => <Link key={a.name} to="/file.pdf" target="_blank" download>{ a.name }</Link>) }
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item className={classes.column}>
                        <h2>Courtesy Letters</h2>
                        <p>Select a letter to send</p>
                        { courtesies.map(a => <Link key={a.name} to="/file.pdf" target="_blank" download>{ a.name }</Link>) }
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Card>
        </>
    );
}
export { TemplateLibrary };
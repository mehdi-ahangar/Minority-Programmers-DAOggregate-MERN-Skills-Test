import React,{Component} from 'react'
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'

export class Sidebar3 extends Component{

    render(){

    return (
        <div>
        <Sidebar bgColor='black' isCollapsed={false}>
          <Logo
            image='https://media2.giphy.com/media/eNAsjO55tPbgaor7ma/source.gif'
            imageName='react logo'/>
          <LogoText>React Sidebar UI</LogoText>
          <DropdownItem
            values={['First', 'Second', 'Third']}
            bgColor={'black'}>
            Menu
          </DropdownItem>
  
          <Item bgColor='black'>
            <Icon><i className="fas fa-home"/></Icon>
            Home
          </Item>
          <Item bgColor='black'>
            <Icon><i className="fas fa-info"/></Icon>
            About
          </Item>
          <Item bgColor='black'>
            <Icon><i className="fas fa-sitemap"/></Icon>
            My Website
          </Item>
          <Item bgColor='black'>
            <Icon><i className="far fa-address-book"/></Icon>
            Contacts
          </Item>
          <Item bgColor='black'>
            <Icon><i className="fas fa-rss-square"/></Icon>
            Blog
          </Item>
          <InputItem type='text' placeholder={'Search...'}/>
        </Sidebar>
      </div>

    )
}
}
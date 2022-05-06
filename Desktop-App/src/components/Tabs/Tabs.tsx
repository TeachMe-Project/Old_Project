import * as React from 'react';
import { Component } from 'react'; 

// import React,  from 'react';
import {string, func, instanceOf} from 'prop-types';
import Tab from './Tab';


class Tabs extends Component<{children:Array<any>} ,any> {
 

  constructor(props:any) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }


  onClickTabItem = (tab:any) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <div className="Tabs">
        <ol className="tab-list">
          {children.map((child:any) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
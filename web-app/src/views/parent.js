import React, {Component} from 'react';
import OngoingClassCard from '../Assets/components/Ongoing-Class-Container/OngoingClassContent.js';
import ParentPayment from '../Assets/components/Payment-Container/ParentPayment.js';
import TabContentItem from '../Assets/components/Tab-Content/TabContentItem.js';

class Parent extends Component {
    render() {
        return (
            <div className="Parent">
                <div className="Parent-header">
                    <h1>Parent</h1>
                </div>
                <div className="Parent-tab-content">
                    <TabContentItem>
                        Payment
                    </TabContentItem>
                    <TabContentItem>
                        Summary
                    </TabContentItem>
                    <TabContentItem>
                        Ongoing Classes
                    </TabContentItem>
                </div>
                {/* <ParentPayment></ParentPayment> */}
                <OngoingClassCard></OngoingClassCard>
            </div>
        );
    }
}

export default Parent;

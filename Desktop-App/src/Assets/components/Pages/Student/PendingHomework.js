import React from 'react'
import {Card} from '../../Card/Card';
import {CardHeader} from '../../Card/CardHeader';
import {CardDetails} from '../../Card/CardDetails';

export const PendingHomework = () => {
  return (
    <div className='PendingHomework'>
              <Card>
                <CardHeader>Mathematics class</CardHeader>
                <CardDetails>Grade 8</CardDetails>
                <CardDetails>Mr. Lasitha Nuwan</CardDetails>
              </Card>
         

    </div>
  )
}

export default PendingHomework;

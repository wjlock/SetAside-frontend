import { PieChart } from 'react-minimal-pie-chart';
import React, { Component } from 'react';
 
 class Dashboard extends Component {
     render() {
     return(
         //budget
         //preset average value 
         <div>
            <div>
                <div class="progress">
                {/* <div class="progress-bar progress-bar-striped" role="progressbar" style={{width: '10%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div> */}
                <div class="progress-bar progress-bar-striped" role="progressbar" style={{width: '75%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
                <div class="progress">
                <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress">
            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress">
            <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            {/* <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div> */}
            </div>
            <div class="progress">
            <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>

        {/* spending */}
        <PieChart className="pie-chart"
        data={[
            { title: 'One', value: 10, color: '#E38627' },
            { title: 'Two', value: 15, color: '#C13C37' },
            { title: 'Three', value: 20, color: '#6A2135' },
        ]}
    
        />
        </div>
     )};}
export default Dashboard;
import React from 'react';
import SimpleViewCard from "../SimpleViewCard/SimpleViewCard";
import './AllSimpleViews.css';


function AllSimpleViews() {
    return (
        <div className="All_simple_views">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-4">
                    <SimpleViewCard  title={'Top 5 Defi Lending'} description={'Top 5 defi apps based on Lending'}/>                        

                    </div>

                    <div className="col-lg-4">
                    <SimpleViewCard  title={'Top 5 Defi Lending'} description={'Top 5 defi apps based on Lending'}/>                        

                    </div>

                    <div className="col-lg-4">
                    <SimpleViewCard  title={'Top 5 Defi Lending'} description={'Top 5 defi apps based on Lending'}/>                        

                    </div>

                    <div className="col-lg-4">
                    <SimpleViewCard  title={'Top 5 Defi Lending'} description={'Top 5 defi apps based on Lending'}/>                        

                    </div>

                    <div className="col-lg-4">
                    <SimpleViewCard  title={'Top 5 Defi Lending'} description={'Top 5 defi apps based on Lending'}/>                        

                    </div>

                </div>

            </div>

            
        </div>
    )
}

export default AllSimpleViews

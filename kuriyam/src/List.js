import React from 'react';

class List extends React.Component{



    render(){
         return(
            <div>
                <ul className="list-group">
                    {this.props.items.map( (i) => {
                        return (
                        <li key={i} className="list-group-item">
                            {i}
                        </li>);

                        }
                    )
                }
                </ul>
            </div>
            )
        }
    }
export default List;
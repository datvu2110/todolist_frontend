import React from 'react'
import "./SearchBox.css"
class SearchBox extends React.Component{
    render(){
        return(
            <div>
                <input 
                    results="5" autoSave="5"
                    type="search" 
                    placeholder="Search Task" 
                    onChange={this.props.searchChange}
                />
            </div>
           
        )
    }
}

export default SearchBox
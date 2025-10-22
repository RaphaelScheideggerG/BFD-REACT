import React from "react";

export default class SelectList extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            valor: props.search,
            lista: props.lista,
        }
    }

    /* Função que será disparada com onChange()={} */
    search() {

    }

    render() {
        return(
            <>
            
            </>
        )
    }
}
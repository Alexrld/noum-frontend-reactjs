import React from 'react'

const withLoader = (WrappedComponent) => {

   return class WithLoader extends React.Component {
      // eslint-disable-next-line no-useless-constructor
      constructor(props) {
         super(props)
      }
      render(){
         return <WrappedComponent {...this.props} />
      }
   }
}

export default withLoader

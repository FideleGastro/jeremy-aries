import React, { createContext } from 'react';

const UserContext = createContext(null);

export const WithUser = Component => props => (
         <UserContext.Consumer>
             {user => <Component {...props} user={user}/>}
         </UserContext.Consumer>
)

export default UserContext;
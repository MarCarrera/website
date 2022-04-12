import React from 'react';

function Routes(){
    return (
      <>
        <Router>
            <Switch>
                <Route path={'/detailsService'} component={DetailsService}></Route>
            </Switch>

        </Router>
      </>
    )
}
export default Routes;
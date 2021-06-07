import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import appInfo from './app-info';
import routes from './app-routes';
import { SideNavOuterToolbar as SideNavBarLayout } from './layouts';
import { Footer } from './components';
import { Toast } from 'devextreme-react/toast';
import { useSelector, useDispatch } from 'react-redux'
import { toastAction, toastSelector } from './common/Toast/slice';

export default function () {
  const dispatch = useDispatch()

  const { isVisible, type, message, displayTime } = useSelector(toastSelector.all);

  const onHiding = () => {
    dispatch(toastAction.hide());
  }

  return (
    <SideNavBarLayout title={appInfo.title}>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route
            exact
            key={path}
            path={path}
            component={component}
          />
        ))}
        <Redirect to={'/home'} />
      </Switch>
      <Toast
        visible={isVisible}
        message={message}
        type={type}
        onHiding={onHiding}
        displayTime={displayTime}
      />
      <Footer>
        Copyright © 2011-{new Date().getFullYear()} {appInfo.title} Inc.
        <br />
        All trademarks or registered trademarks are property of their
        respective owners.
      </Footer>
    </SideNavBarLayout>
  );
}

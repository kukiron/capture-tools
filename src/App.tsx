import { AppMenu, Navbar, Toast } from 'components';
import { getAppPathName } from 'lib/common';
import { COMPONENT_ROUTES, DEFAULT_ROUTE } from 'lib/constatns';
import { ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import EditEngagement from 'routes/EditEngagement';

function AppContainer({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-base-200">
      <Navbar />
      <div aria-expanded="false" className="drawer lg:drawer-open">
        <div className="drawer-content">
          <div className="pt-24">{children}</div>
        </div>
      </div>

      <Toast />
    </div>
  );
}

function App() {
  return (
    <AppContainer>
      <Routes>
        {Object.keys(COMPONENT_ROUTES).map((path) => {
          const Component = COMPONENT_ROUTES[path];
          return (
            <Route
              key={path}
              path={getAppPathName(path)}
              element={
                <div className="grid grid-cols-1 gap-0 lg:grid-cols-9">
                  <AppMenu />
                  <Component />
                </div>
              }
            />
          );
        })}

        <Route
          path={`${DEFAULT_ROUTE}/:id/edit`}
          element={<EditEngagement />}
        />

        {/* Redirect to default route */}
        {['/', '*'].map((path) => (
          <Route
            key={path}
            path={path}
            element={<Navigate replace to={DEFAULT_ROUTE} />}
          />
        ))}
      </Routes>
    </AppContainer>
  );
}

export default App;
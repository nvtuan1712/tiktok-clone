// import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes/routes';
import  DefaultLayout  from '~/layouts';
import DefaultLayoutv2 from './layouts/DefaultLayoutv2';
import ModalKey from './components/ModalKey';
import { Fragment } from 'react';

function App({ children }) {

    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        //Muốn dùng biến trong jsx thì phải viết hoa chữ cái đầu

                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === DefaultLayoutv2) {
                            Layout = DefaultLayoutv2;
                        } else if (route.layout === null) {
                            Layout = <Fragment/>
                        }

                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
                <ModalKey styles={{visibility: 'hidden'}}/>
            </div>
        </Router>
    );
}

export default App;

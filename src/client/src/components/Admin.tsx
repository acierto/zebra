/* eslint-disable */
import React from 'react';
import PropTypes, {Validator} from 'prop-types';
import {Route, Switch} from 'react-router-dom';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import withStyles from '@material-ui/core/styles/withStyles';
import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbars/Navbar';

import routes from '../routes';

import dashboardStyle from '../../../assets/jss/material-dashboard-react/layouts/dashboardStyle';
import image from '../../../assets/img/sidebar-2.jpg';
import logo from '../../../assets/img/reactlogo.png';

const switchRoutes = (
    <Switch>
        {routes.map((prop, key) => {
            if (prop.layout === '/admin') {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            }
        })}
    </Switch>
);

interface Props {
    classes: any,
    location: any
}

interface State {
    image: any,
    color: string,
    hasImage: boolean,
    fixedClasses: string,
    mobileOpen: boolean
}

class Dashboard extends React.Component<Props, State> {
    static propTypes: { classes: Validator<NonNullable<object>> };
    constructor(props) {
        super(props);
        this.state = {
            image: image,
            color: 'blue',
            hasImage: true,
            fixedClasses: 'dropdown show',
            mobileOpen: false
        };
    }

    handleImageClick = image => {
        this.setState({image: image});
    };
    handleColorClick = color => {
        this.setState({color: color});
    };
    handleFixedClick = () => {
        if (this.state.fixedClasses === 'dropdown') {
            this.setState({fixedClasses: 'dropdown show'});
        } else {
            this.setState({fixedClasses: 'dropdown'});
        }
    };
    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    };

    getRoute() {
        return this.props.location.pathname !== '/admin/maps';
    }

    resizeFunction = () => {
        if (window.innerWidth >= 960) {
            this.setState({mobileOpen: false});
        }
    };

    componentDidMount() {
        if (navigator.platform.indexOf('Win') > -1) {
            // @ts-ignore
            const ps = new PerfectScrollbar(this.refs.mainPanel);
        }
        window.addEventListener('resize', this.resizeFunction);
    }

    componentDidUpdate(e) {
        if (e.history.location.pathname !== e.location.pathname) {
            // @ts-ignore
            this.refs.mainPanel.scrollTop = 0;
            if (this.state.mobileOpen) {
                this.setState({mobileOpen: false});
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeFunction);
    }

    render() {
        const {classes, ...rest} = this.props;
        return (
            <div className={classes.wrapper}>
                <Sidebar
                    routes={routes}
                    logoText={'Creative Tim'}
                    logo={logo}
                    image={this.state.image}
                    handleDrawerToggle={this.handleDrawerToggle}
                    open={this.state.mobileOpen}
                    color={this.state.color}
                    {...rest}
                />
                <div className={classes.mainPanel} ref="mainPanel">
                    <Navbar
                        routes={routes}
                        handleDrawerToggle={this.handleDrawerToggle}
                        {...rest}
                    />
                    {this.getRoute() ? (
                        <div className={classes.content}>
                            <div className={classes.container}>{switchRoutes}</div>
                        </div>
                    ) : (
                        <div className={classes.map}>{switchRoutes}</div>
                    )}
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
};

// @ts-ignore
export default withStyles(dashboardStyle)(Dashboard);

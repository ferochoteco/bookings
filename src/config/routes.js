import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SiteBenefitsScreen from '../screens/SiteBenefitsScreen';
import BookingsCalendarScreen from '../screens/BookingsCalendarScreen';
import ReservationsScreen from '../screens/ReservationsScreen';

const MainRoutes = {
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
    SiteBenefits: { screen: SiteBenefitsScreen },
    BookingsCalendar: { screen: BookingsCalendarScreen }
};

const ReservationsRoutes = {
    Reservations: { screen: ReservationsScreen }
};

export { MainRoutes, ReservationsRoutes};
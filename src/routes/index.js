import Home from '~/pages/Home';
import Folowing from '~/pages/Folowing';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layout';

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/folowing', component: Folowing},
    {path: '/profile', component: Profile},
    {path: '/upload', component: Upload, layout: HeaderOnly},
];

const privateRoutes = [

];

export { publicRoutes, privateRoutes };


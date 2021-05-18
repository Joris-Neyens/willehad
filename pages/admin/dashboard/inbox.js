import Head from '../../../src/components/head/Head';
import DashboardMenu from '../../../src/components/layout/DashboardMenu';
import SideMenu from '../../../src/components/pages/dashboard/SideNav';

export default function inbox() {
    return (
        <>
            <Head title="contact inbox" description="overzicht over alle inkomende berichten"/>
            <DashboardMenu />
            <SideMenu/>
        </>
    )
}

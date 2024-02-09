import Menu from './elements/menu'
import LogoutButton from './elements/log-out';

export default function IndexPage() {
    return (
        <div className="space-y-6">
            <Menu />
            <LogoutButton />
        </div>
    );
}

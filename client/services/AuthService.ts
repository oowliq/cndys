import router from 'next/router';

class AuthService {
    private readonly authEndpoint = 'https://accounts.spotify.com/authorize';

    private readonly redirectUri = 'http://localhost:8080/auth';

    private readonly scopes = ['user-read-currently-playing', 'user-read-playback-state'];

    private readonly clientId = process.env.CLIENT_ID as string;

    public getToken(): string | null {
        return typeof window !== 'undefined' ? window.localStorage.getItem('spotify-token') : null;
    }

    public signIn(): void {
        const url = new URL(this.authEndpoint);
        url.searchParams.append('response_type', 'token');
        url.searchParams.append('client_id', this.clientId);
        url.searchParams.append('scope', this.scopes.join('%20'));
        url.searchParams.append('redirect_uri', this.redirectUri);
        url.searchParams.append('show_dialog', 'true');

        window.location.assign(url.toString());
        window.location.hash = '';
    }

    public logout(): void {
        localStorage.removeItem('spotify-token');
        router.push('/auth');
    }

    public saveToken(): boolean {
        const hash = window.location.hash;
        const parsed = hash.match(new RegExp('access_token' + '=([^&]*)'));
        if (parsed) {
            localStorage.setItem('spotify-token', parsed[1]);
            window.location.hash = '';
            return true;
        }
        return false;
    }

    public get isLoggedIn(): boolean {
        return !!this.getToken();
    }
}

const authService = new AuthService();
export { authService };

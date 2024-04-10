// TODO: @Jaimish make the shape of this interface
//       to match the cookie object
export interface UserCookieProps {
	emailAddress: string;
	password: string;
}

export async function authenticateUser(username: string, password: string): Promise<UserCookieProps | undefined> {
	// TODO: @Jaimish we need to call the backend API
	// return undefined;
	return {
		emailAddress: "user@gmail.com",
		password: "Pass@12345",
	};
}

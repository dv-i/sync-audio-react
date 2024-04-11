// TODO: @Jaimish make the shape of this interface

import { tracks } from "./data/tracks";

//       to match the cookie object
export interface UserCookieProps {
	emailAddress: string;
	password: string;
}

export async function authenticateUser(username: string, password: string): Promise<UserCookieProps | undefined> {
	// TODO: @Jaimish we need to call the backend API
	// return UserCookieProps object | undefined in case of failure;
	return {
		emailAddress: "user@gmail.com",
		password: "Pass@12345",
	};
}

export interface TrackProps {
	id: number;
	checksum: string;
	title: string;
	artist: string;
	genre: string;
	mood: string;
	duration: number;
	featured: number;
	style: string;
	tempo: number;
	genres: string[];
	moods: string[];
}

export async function fetchMusicTracks(): Promise<TrackProps[]> {
	// TODO: @Jaimish we need to call the backend API
	// return TrackProps[];
	return tracks.tracks;
}

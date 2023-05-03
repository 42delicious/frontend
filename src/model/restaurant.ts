export interface RestaurantInterface {
	id: string;
	name: string;
	price: string;
	category: string;
	summary: string;
	location: string;
	longitude?: number;
	latitude?: number;
	detail?: string;
}

export class Restaurant implements RestaurantInterface {
	id: string;
	name: string;
	price: string;
	category: string;
	summary: string;
	location: string;
	longitude?: number;
	latitude?: number;
	detail?: string;
	constructor(
		id: string,
		name: string,
		price: string,
		category: string,
		summary: string,
		location: string,
		longitude?: number,
		latitude?: number,
		detail?: string
	) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.category = category;
		this.summary = summary;
		this.location = location;
		this.longitude = longitude;
		this.latitude = latitude;
		this.detail = detail;
	}
}

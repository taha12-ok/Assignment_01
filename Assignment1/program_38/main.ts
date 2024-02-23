function describe_city(city, country = 'Unknown'): void {
    console.log(`${city} is in ${country}.`);
}
describe_city('Karachi', 'Pakistan');
describe_city('Tokyo', 'Japan');
describe_city('Paris'); 

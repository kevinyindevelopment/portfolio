export const projects = [
    {
        title: 'Old School RuneScape GIM API',
        description: "Old School RuneScape is a game where keeping track of statistics is very important. However, there is a flaw in its API which does not allow a certain subset of accounts to have their data tracked. This project tries to remedy that by scraping related data from the official website and API. You can then ping this API in order to get information on these accounts which normally isn't available through the official API.",
        image: '\OSRS.jpg',
        tags: ['Axios', 'Node'],
        source: '',
        visit: 'https://github.com/kevinyindevelopment/group-ironman-hiscores',
        id: 0,
    },
    {
        title: 'Portfolio Website',
        description: "I designed this website while keeping in mind scalability and presentation. Page elements move locations based on the viewport's resolution. \n Every component is structured using styled-components to keep styles reusable and ordered. \n ThemeProvider is implemented to make fast changes to critical variables, such as the website's color scheme and resolution breakpoints for mobile and smaller devices. ",
        image: '\WebsitePortrait.jpg',
        tags: ['React', 'styled-components','Vite'],
        source: 'https://kevinyin.net',
        visit: 'https://github.com/kevinyindevelopment/portfolio',
        id: 1,
    }

]
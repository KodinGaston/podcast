interface Podcast {
    programs: {
      name: string;
      description: string;
      socialimage: string;
      programurl: string;
    }[];
  }
  
  export async function getPodcasts(): Promise<Podcast | null> {
    try {
      const response = await fetch('https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=json&pagination=false&indent=true&filter=program.archived&filterValue=false');
      const data: Podcast = await response.json();
      return data;
    } catch (error) {
      console.error('nått blev fel:', error);
      return null;
    }
  }
  
  export default getPodcasts;
  
import { Section, SectionText, SectionTitle, LineSeparator } from '../../themes/GlobalComponents';
import { BackgroundSection, SoundCloudContainer, SwapSide, BackgroundSectionImage} from './BackgroundStyles';
  
const Background = () =>  (
    <Section id="background">
        <SectionTitle main fontSize="45px">Background</SectionTitle>
        <BackgroundSection> 
            <div>
                I find myself drawn to team-related roles that also have an emphasis on individual performance. I was heavily involved in my UCLA League of Legends team throughout all of college, playing in high-stress environments and devoting a lot of effort into sharpening my proficiency.
            </div>
            <BackgroundSectionImage>
                <img style={{width: "100%"}} src="/esports.jpg"/>
            </BackgroundSectionImage>
        </BackgroundSection>
        <LineSeparator center/>
        <BackgroundSection> 
            <SwapSide>
                <SoundCloudContainer
                    title="SoundCloud Player"
                    src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1383500041&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
                />
            </SwapSide>
            <div>
                I'm also passionate about making music. I've played in my local orchestra, as well as UCLA Symphonic Band. It takes a lot of deliberate practice and attention to detail in order to improve at these skills.
            </div>
        </BackgroundSection>
        <LineSeparator center/>
        <BackgroundSection center style={{margin: "0 0 3%"}}> My expertise in these areas give me a very diverse skillset when it comes to software development. I handle stress well, can approach problems from many different perspectives, solve problems quickly, and provide a user-first outlook while working on products. 
        </BackgroundSection>
    </Section>
);

export default Background;  
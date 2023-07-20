import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionTitle } from '../../themes/GlobalComponents';
import { projects } from './ProjectsData';

const Projects = () => (
  <Section  id="projects">
    <SectionTitle main fontSize="45px">Projects</SectionTitle>
        <GridContainer>
        {projects.map((p, i) => {
            return (
            <BlogCard key={i}>
            <Img src={p.image} />
                <TitleContent>
                <HeaderThree>{p.title}</HeaderThree>
                <Hr />
                </TitleContent>
                <CardInfo className="card-info">{p.description}</CardInfo>
                <div>
                <TitleContent>Stack:</TitleContent>
                <TagList>
                    {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                    })}
                </TagList>
                </div>
                <UtilityList>
                <ExternalLinks href={p.visit}>Code</ExternalLinks>
                <ExternalLinks href={p.source}>Source</ExternalLinks>
                </UtilityList>
            </BlogCard>
            );
        })}
        </GridContainer>
  </Section>
);

export default Projects;
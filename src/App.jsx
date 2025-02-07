import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  createTheme,
  CssBaseline,
  Divider,
  Stack,
  ThemeProvider,
  Typography
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import { SocialLink } from './components/SocialLink.jsx'
import { Description, Email, GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import { ExperienceCard, SkillCard } from './components/ResumeSection.jsx'
import { ProjectCard } from './components/ProjectCard.jsx'
import { SectionHeader } from './components/SectionHeader.jsx'

function App() {

  // ================================================================================
  // Theme
  // ================================================================================
  const theme = createTheme({
    // Colors
    palette: {
      mode: 'dark',
    },
    // Components / Default Props
    components: {
      // Typography
      MuiTypography: {
        defaultProps: {
          gutterBottom: true,
        },
      },
      // Paper
      MuiPaper: {
        defaultProps: {
          variant: 'outlined',
        },
        styleOverrides: {
          root: ({theme}) =>
            theme.unstable_sx({
              p: 2,
            }),
        },
      },
      // Slightly Less Based Button Component
      MuiButton: {
        defaultProps: {
          // Disable elevation everywhere
          disableElevation: true,
        }
      },
      // Button Groups
      MuiButtonGroup: {
        defaultProps: {
          // Disable elevation everywhere
          disableElevation: true,
        }
      },
      // Baseline styles
      MuiCssBaseline: {
        styleOverrides: (themeParam) => `
        h2 {
          color: ${themeParam.palette.primary.main};
        }
      `,
      },
    },
  })

  // ================================================================================
  // Content
  // ================================================================================

  // --------------------------------------------------------------------------------
  // Experience section
  // --------------------------------------------------------------------------------
  const experienceContent = [
    {
      jobTitle: 'Software Engineer',
      company: 'Wellspring',
      startDate: 'June 2020',
      endDate: 'Present',
      bullets: [
        'Developed client-focused software solutions in PHP, collaborating with project managers and the QA team to ensure quality and timely delivery.',
        'Streamlined development workflows by creating Jenkins jobs and command line tools with Python.',
        'Authored extensive documentation and engaged in peer programming to enhance team collaboration and knowledge sharing.',
      ],
    },
    {
      jobTitle: 'Full-Stack Developer',
      company: 'Schafer Condon Carter',
      startDate: 'January 2018',
      endDate: 'November 2019',
      bullets: [
        'Created a framework and CMS system for building websites using Sass, JavaScript, and Python.',
        'Developed a cross-browser automated testing system to streamline QA using Python and Selenium.',
        'Built and managed client websites using Django, Wagtail, and Adobe Experience Manager.',
      ],
    },
    {
      jobTitle: 'CS Lab Configuration Management Intern',
      company: 'Wheaton College Computer Science',
      startDate: 'May 2017',
      endDate: 'November 2017',
      bullets: [
        'Collaborated with the CS lab system admin to implement the Salt configuration management system.',
        'Contributed to the Salt open source project with bug fixes and feature implementations.',
      ],
    },
    {
      jobTitle: 'Web Application Developer',
      company: 'Buswell Memorial Library',
      startDate: 'August 2016',
      endDate: 'January 2018',
      bullets: [
        'Built bespoke, responsive web apps to streamline workflows for various departments.',
        'Developed features, fixed bugs, and created unit tests for the Coral open source project.',
      ],
    },
    {
      jobTitle: 'IT Developer & Software Deployment Engineer',
      company: 'Wheaton College Academic & Institutional Technology',
      startDate: 'May 2015',
      endDate: 'August 2017',
      bullets: [
        'Built a dashboard web app for the service desk to display important information for technicians.',
        'Developed scripts to automate support procedures and streamline service desk workflows.',
        'Packaged and deployed software for automated installation on campus computers.',
      ],
    },
    {
      jobTitle: 'Service Desk Supervisor',
      company: 'Wheaton College Academic & Institutional Technology',
      startDate: 'October 2014',
      endDate: 'August 2017',
      bullets: [
        'Provided tech support to students and staff for hardware, software, and network issues.',
        'Trained, supervised, and assisted service desk technicians.',
      ],
    },
  ]

  // Experience section components.
  const experienceCards = experienceContent.map((props, i) =>
    <ExperienceCard key={i} {...props}/>
  )

  // ================================================================================
  // Render
  // ================================================================================
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>

      {/*TODO: app bar */}

      <Container id="page-wrapper" maxWidth="md">

        { /* Hero Banner */}
        <Box
          id="section-top"
          sx={{
            mt: 16,
            mb: 8,
          }}
        >
          {/*Header Text*/}
          <Box
            sx={{
              mt: 16,
              mb: 8,
            }}
          >
            <Typography
              variant="h4"
              color="textSecondary"
              sx={{
                fontWeight: 400,
              }}
              gutterBottom={false}
            >
              Hi, my name is
            </Typography>
            {/*TODO: make sure name scales nicely, breaks well on narrow views (damn this 3 word last name)*/}
            <Typography
              variant="h1"
              color="primary"
              sx={{
                fontWeight: 400,
              }}
            >
              Connor de la Cruz.
            </Typography>
          </Box>

          <Divider sx={{mb: 4}}>
            {/* Profile */}
            <Box
              sx={{
                mb: 4,
              }}
            >
              <img
                src="images/about/profile.jpg"
                className="project-image"
              />
            </Box>
          </Divider>

          {/*Subheader Text*/}
          <Box>
            <Typography variant="h4" component="p">
              <i>I'm a software engineer with a passion for creative problem solving and learning new things.</i>
            </Typography>

            {/*Socials*/}
            <Divider sx={{mt: 4}}>
              <SocialLink
                label="Email"
                iconComponent={<Email/>}
                url="mailto:connor.c.delacruz@gmail.com"
              />
              <SocialLink
                label="GitHub"
                iconComponent={<GitHub/>}
                url="https://github.com/connordelacruz"
              />
              <SocialLink
                label="LinkedIn"
                iconComponent={<LinkedIn/>}
                url="http://www.linkedin.com/in/connordelacruz"
              />
              <SocialLink
                label="Instagram"
                iconComponent={<Instagram/>}
                url="https://www.instagram.com/delachrome"
              />
            </Divider>

          </Box>
        </Box>

        {/*TODO: remove?*/}
        {/*/!* Profile *!/*/}
        {/*<Box*/}
        {/*  sx={{*/}
        {/*    mb: 4,*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <img*/}
        {/*    src="images/about/profile.jpg"*/}
        {/*    className="project-image"*/}
        {/*  />*/}
        {/*</Box>*/}

        {/* Content */}
        <Stack
          id="sections-stack"
          spacing={4}
        >

          {/*TODO: profile photo (somewhere, idk if in the hero or here)*/}
          {/* About */}
          <Box id="section-about">
            <SectionHeader>About Me</SectionHeader>

            <Stack
              id="about-content"
              spacing={2}
            >
              <Typography variant="h5" component="p">
                {/*TODO: Some cool stuff about how I'm capable of thriving with any code stack.*/}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ita nemo beato beatior. Traditur, inquit, ab
                Epicuro ratio neglegendi doloris. Si id dicis, vicimus. Quamquam id quidem licebit iis existimare, qui
                legerint.
              </Typography>
              <Typography variant="h5" component="p">
                {/*TODO: Some cool stuff I do when I'm not working.*/}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate.
                Sed quot homines, tot sententiae; Occultum facinus esse potuerit, gaudebit; Bonum integritas corporis:
                misera debilitas. Immo videri fortasse.
              </Typography>
            </Stack>
          </Box>

          {/* Resume */}
          <Box id="section-resume">
            <SectionHeader>Resume</SectionHeader>

            <Stack
              id="resume-stack"
              spacing={2}
            >
              <Box id="resume-skills">
                <Typography variant="h3">Skills</Typography>
                <Grid
                  container
                  spacing={2}
                  direction={{xs: 'column', sm: 'row'}}
                  sx={{
                    justifyContent: "space-evenly",
                    alignItems: "stretch",
                  }}
                >
                  <Grid size={{xs: 12, sm: 4}}>
                    <SkillCard title="Programming">
                      Python, PHP, JavaScript (ES2015+), CSS, Sass, HTML, Java, Bash, Groovy
                    </SkillCard>
                  </Grid>
                  <Grid size={{xs: 12, sm: 4}}>
                    <SkillCard title="Libraries & Frameworks">
                      React, Material UI, P5.js, Processing, Django, Cypress, Selenium
                    </SkillCard>
                  </Grid>
                  <Grid size={{xs: 12, sm: 4}}>
                    <SkillCard title="Tools & Software">
                      Git, GitHub, MySQL, Docker, Jenkins, Node.js, JetBrains IDEs, vim
                    </SkillCard>
                  </Grid>
                </Grid>
              </Box>

              <Box id="resume-experience">
                <Typography variant="h3">Experience</Typography>
                <Stack spacing={2}>
                  {experienceCards}
                </Stack>
              </Box>

              {/*TODO: link to resume pdf*/}
              <Box id="resume-pdf">
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Description/>}
                  size="large"
                  fullWidth
                >
                  View Full Resume
                </Button>
              </Box>

            </Stack>
          </Box>

          {/* Projects */}
          <Box id="section-projects">
            <SectionHeader>Projects</SectionHeader>

            <Stack
              id="projects-stack"
              spacing={2}
            >
              <ProjectCard
                title="Channel ⇄ Shift"
                imgSrc="images/projects/channel-shift.png"
                bigButtonContent={{
                  text: 'Visit Channel Shift Site',
                  link: 'https://cheezwhiz.biz'
                }}
              >
                A web app for creating "glitch art" by shifting and swapping an image's RGB color channels, developed as
                a
                web app with an intuitive UI to make it easily accessible for anyone to use. Built with React and P5.js.
                Click the button below to try it out!
              </ProjectCard>
              <ProjectCard
                title="React Counter App"
                imgSrc="images/projects/react-counter.png"
                bigButtonContent={{
                  text: 'Visit React Counter Site',
                  link: 'https://connordelacruz.com/react-counter/'
                }}
              >
                A simple web app for creating customizable counters. Each counter can have a custom name, color,
                increment/decrement value, and reset value. Counters can easily be reordered by clicking and dragging
                them into place. Data is saved locally, so your counters will persist any time you come back to the
                page. Created using React and MUI’s Material UI library.
              </ProjectCard>
              <ProjectCard
                title="Channel ⇄ Shift Classic"
                imgSrc="images/projects/channel-shift-classic.png"
                smallButtonsContent={[
                  {
                    text: 'GitHub',
                    link: 'https://github.com/connordelacruz/ChannelShiftGUI'
                  }
                ]}
              >
                {/*TODO: explain project being no longer maintained but also why it's worth using still?*/}
                An older version of the Channel Shift tool created with Processing. Includes some experimental features
                that haven't been ported to the web app yet.
              </ProjectCard>
              <ProjectCard
                title="Chicago ASCII Art"
                imgSrc="images/projects/chicago-ascii-art.png"
                smallButtonsContent={[
                  {
                    text: 'GitHub',
                    link: 'https://github.com/connordelacruz/chicago-ascii.sh'
                  }
                ]}
              >
                Bash scripts for displaying color ASCII art of Chicago flag/skyline in the terminal.
              </ProjectCard>
              <ProjectCard
                title="iTerm2 Tab Color Commands"
                imgSrc="images/projects/iterm2-tab-color.png"
                smallButtonsContent={[
                  {
                    text: 'GitHub',
                    link: 'https://github.com/connordelacruz/iterm2-tab-color'
                  }
                ]}
              >
                Bash commands for setting the iTerm2 tab/title bar colors. Pairs well with base16 shell themes.
              </ProjectCard>
              <ProjectCard
                title="Git Workflow Tools"
                smallButtonsContent={[
                  {
                    text: 'GitHub',
                    link: 'https://github.com/connordelacruz/git-workflow'
                  },
                  {
                    text: 'PyPI',
                    link: 'https://pypi.org/project/git-workflow/'
                  }
                ]}
              >
                Command line tools to streamline our team's Git workflow. Written in Python.
              </ProjectCard>
              <ProjectCard
                title="Python Random User Generator"
                smallButtonsContent={[
                  {
                    text: 'GitHub',
                    link: 'https://github.com/connordelacruz/python-randomuser'
                  },
                  {
                    text: 'PyPI',
                    link: 'https://pypi.org/pypi/randomuser'
                  },
                  {
                    text: 'Docs',
                    link: 'http://connordelacruz.com/python-randomuser/'
                  }
                ]}
              >
                A Python class for generating random user information using the randomuser.me API.
              </ProjectCard>
              <ProjectCard
                title="Python Lorem Ipsum Generator"
                smallButtonsContent={[
                  {
                    text: 'GitHub',
                    link: 'https://github.com/connordelacruz/py-loremipsum'
                  },
                  {
                    text: 'PyPI',
                    link: 'https://pypi.org/pypi/py-loremipsum'
                  },
                  {
                    text: 'Docs',
                    link: 'http://connordelacruz.com/py-loremipsum/'
                  }
                ]}
              >
                A Python module for generating placeholder text using the loripsum.net API. Includes a command line tool
                to generate text from the terminal and copy it to the clipboard.
              </ProjectCard>

              {/*View more button*/}
              <Box id="github-link">
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<GitHub/>}
                  size="large"
                  fullWidth
                  href="https://github.com/connordelacruz"
                  target="_blank"
                >
                  View More on GitHub
                </Button>
              </Box>
            </Stack>
          </Box>

          {/*Contact*/}
          <Box id="section-contact">
            <SectionHeader>Contact</SectionHeader>
            <Card>
              <CardContent>
                <Typography variant="h5" component="p">
                  {/*TODO contact copy*/}
                  Hit me up if u tryna do dope shit :)
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Email/>}
                  size="large"
                  fullWidth
                  href="mailto:connor.c.delacruz@gmail.com"
                  target="_blank"
                >
                  connor.c.delacruz@gmail.com
                </Button>
              </CardContent>
            </Card>
          </Box>

        </Stack>

      </Container>

      <Box>
        <Typography
          variant="overline"
          component="p"
          color="textSecondary"
          sx={{
            textAlign: 'center',
            py: 2,
            mt: 2,
          }}
        >
          © {new Date().getFullYear()} Connor de la Cruz
        </Typography>
      </Box>
    </ThemeProvider>
  )
}

export default App

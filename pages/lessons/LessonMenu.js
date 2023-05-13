import { Box, Divider, Stack, styled } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CSSLinkStyle = styled(Link)(({ active }) => ({
  textDecoration: 'none',
  color: active === "true" ? "#ffa22d" : '#fff',
  transition: '0.3s',
  "&:hover": {
    color: "#EF9A53"
  }
}));

const LessonMenu = ({ lessons }) => {
  const router = useRouter()


  return (
    <Box>
      <h1 style={{ textAlign: 'center', color: '#FFFF' }}>שיעורים</h1>
      <ul>
      <Stack
        direction="row"
        justifyContent='center'
        divider={<Divider orientation="vertical" flexItem sx={{ borderColor : "#ffa22d" }} />}
        spacing={2}
      >
      {lessons?.map((lesson) => {
        return(
          <CSSLinkStyle
          key={lesson._id}
          href={`/lessons/${lesson.lesson}`}
          active={lesson.lesson ===  Number(router.query.id) ? "true" : "false"}
        >
          {lesson.title}
        </CSSLinkStyle>
        )
      }
      )}
      </Stack>
    </ul>
    </Box>
  );
};

export default LessonMenu;

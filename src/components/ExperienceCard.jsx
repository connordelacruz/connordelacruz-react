import { Card, CardContent, Typography } from '@mui/material'

export const ExperienceCard = ({
                                 jobTitle,
                                 company,
                                 startDate,
                                 endDate,
                                 bullets,
                               }) => {
  const listElements = bullets.map((text, i) =>
    <li key={i}>{text}</li>
  )
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" color="primary">{jobTitle}</Typography>
        <Typography variant="subtitle1" color="text.secondary">{company} · {startDate}–{endDate}</Typography>
        <Typography variant="body1">
          <ul>
            {listElements}
          </ul>
        </Typography>
      </CardContent>
    </Card>
  )
}

import { ExpandMoreRounded as ExpandMoreRoundedIcon } from '@mui/icons-material';
import {
  Accordion as AccordionMui,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from '@mui/material';

export type AccordionProps = {
  children: React.ReactNode;
  summaryTitle: string;
  summaryChildren?: React.ReactNode;
  defaultExpanded: boolean;
};

export const Accordion = ({ children, summaryTitle, summaryChildren, defaultExpanded }: AccordionProps) => {
  const theme = useTheme();

  return (
    <AccordionMui
      defaultExpanded={defaultExpanded}
      disableGutters={true}
      sx={{
        boxShadow: 'none',
      }}
    >
      <AccordionSummary
        sx={{ backgroundColor: theme.palette.neutral[3] }}
        expandIcon={<ExpandMoreRoundedIcon sx={{ mr: 1 }} />}
      >
        <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="subheader2">{summaryTitle}</Typography>
          {summaryChildren}
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 1, backgroundColor: theme.palette.neutral[2] }}>{children}</AccordionDetails>
    </AccordionMui>
  );
};

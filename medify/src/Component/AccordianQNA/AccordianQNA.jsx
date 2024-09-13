import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import styles from './AccordianQNA.module.css';

export default function AccordianQNA({ answer, question, idx }) {
  return (
    <div className={styles.accordianContainer}>
      <Accordion
        sx={{
          boxShadow: 'none', 
          marginBottom: '8px', 
        }}
      >
        <AccordionSummary
          expandIcon={
            <AddIcon
              sx={{
                color: '#2AA7FF',
                fontWeight: 900,
                fontSize: 18,
              }}
            />
          }
          aria-controls={`panel${idx}-content`}
          id={`panel${idx}-header`}
          sx={{
            minHeight: '70px', 
            '& .MuiAccordionSummary-content': {
              margin: '0', 
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '30px',
              color: '#1B3C74',
            }}
          >
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

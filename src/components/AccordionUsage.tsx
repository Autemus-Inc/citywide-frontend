import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import { Box } from "@mui/material";

const CustomExpandIcon = () => {
  return (
    <Box
      sx={{
        ".Mui-expanded & > .collapsIconWrapper": {
          display: "none"
        },
        ".expandIconWrapper": {
          display: "none"
        },
        ".Mui-expanded & > .expandIconWrapper": {
          display: "block"
        }
      }}
    >
      <div className="expandIconWrapper"><RemoveIcon /></div>
      <div className="collapsIconWrapper"><AddIcon /></div>
    </Box>
  );
};

export default function AccordionUsage() {
  return (
    <div className='text-[18px]'>
      <Accordion className='p-4'>
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='text-[18px] lg:text-[24px] md:text-[24px] font-[500]'
        >
          Can I make bookings for others?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className='p-4'>
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className='text-[18px] lg:text-[24px] md:text-[24px] font-[500]'
        >
          Is it possible to book my trip ahead of time?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className='p-4'>
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className='text-[18px] lg:text-[24px] md:text-[24px] font-[500]'
        >
          Can I get a refund if I miss my trip?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className='p-4'>
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className='text-[18px] lg:text-[24px] md:text-[24px] font-[500]'
        >
          Feature Title
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className='p-4'>
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className='text-[18px] lg:text-[24px] md:text-[24px] font-[500]'
        >
          Unknown?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
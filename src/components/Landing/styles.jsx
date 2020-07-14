import { createStyles } from '@material-ui/core/styles';

export default function styles(theme) {
  return createStyles({
    landing: {
      backgroundColor: '#f79f02',
      height: '100vh',
    },
    titleStyle: {
      height: '300px', 
      width: '300px'
    }
  });
}

  /*
    background-image: url(../../assets/images/back.jpg); 
    background-color:#f5623a; //salmon
    background-color: #4733ce; //violeta
    background-color:#35739b; //celeste
    background-color:#f79f02; //amarillo
    background-color:#7dc0c9; //verde agua
    background-color:#f75f4e; //salmon
    background-image: linear-gradient(#081b57, #ffd6bc); //azul a rosa
    background-image: linear-gradient(#8a45b7, #ffcc5f); //violeta a amarillo
    background-image: linear-gradient(#f79f02, #fcb946); //amarillos
    background-image: linear-gradient( #35739b,#7dc0c9); // celestes
    background-image: linear-gradient(to bottom right, #f79f02, #f7b602); //amarillos 
    */
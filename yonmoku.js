var state;

/**
 * Window読み込み時の処理
 */
window.onload = function(){
  let tokens = Array.from(document.getElementsByClassName('token'));
  tokens.map(token => token.addEventListener('click', function(){
    console.log(this.getAttribute('class'));
  }));

  let table = document.getElementsByName('board');
  let rows = Array.from(board.rows);
  rows.map(row => {
    let cells = Array(row.cells);
    cells.map(cell => cell.addEventListener('click', function(){
      console.log(this);
      console.log(this.getAttribute('class'));
    }))
  });
}
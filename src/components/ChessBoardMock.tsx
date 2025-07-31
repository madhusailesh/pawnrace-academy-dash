import { RotateCcw, Move, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ChessBoardMockProps {
  isLiveClass?: boolean;
  userRole?: 'student' | 'coach';
}

const ChessBoardMock = ({ isLiveClass = false, userRole = 'student' }: ChessBoardMockProps) => {
  // Create a simple visual chess board
  const createBoard = () => {
    const squares = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isLight = (row + col) % 2 === 0;
        const squareId = `${String.fromCharCode(97 + col)}${8 - row}`;
        
        squares.push(
          <div
            key={squareId}
            className={`
              aspect-square flex items-center justify-center text-xs font-mono
              ${isLight ? 'bg-chess-light' : 'bg-chess-dark'}
              ${isLight ? 'text-chess-dark' : 'text-chess-light'}
              hover:opacity-80 transition-opacity cursor-pointer
              border border-border/20
            `}
          >
            {/* Add piece notation for initial position */}
            {row === 0 && ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'][col]}
            {row === 1 && '♟'}
            {row === 6 && '♙'}
            {row === 7 && ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'][col]}
          </div>
        );
      }
    }
    return squares;
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-gradient-chess rounded-lg">
              <div className="w-5 h-5 bg-chess-dark rounded-sm"></div>
            </div>
            Chess Board
          </CardTitle>
          
          {isLiveClass && userRole === 'coach' && (
            <div className="flex items-center gap-2">
              <Select defaultValue="analysis">
                <SelectTrigger className="w-[140px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="analysis">Analysis Mode</SelectItem>
                  <SelectItem value="game">Game Mode</SelectItem>
                  <SelectItem value="puzzle">Puzzle Mode</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" size="icon">
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Chess Board */}
        <div className="mx-auto max-w-sm">
          <div className="grid grid-cols-8 gap-0 border-2 border-chess-dark rounded-lg overflow-hidden shadow-chess">
            {createBoard()}
          </div>
          
          {/* Board coordinates */}
          <div className="flex justify-between mt-2 px-1">
            {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map(letter => (
              <span key={letter} className="text-xs text-muted-foreground w-8 text-center">
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* Game Controls */}
        {isLiveClass && (
          <div className="flex flex-wrap gap-2 justify-center">
            <Button variant="outline" size="sm">
              <Move className="h-4 w-4 mr-2" />
              Show Moves
            </Button>
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              Analysis
            </Button>
            <Button variant="outline" size="sm">
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
        )}

        {/* Game Info */}
        <div className="bg-muted/30 rounded-lg p-3 text-center">
          <p className="text-sm text-muted-foreground">
            {isLiveClass 
              ? "Interactive chess board for live lessons"
              : "Chess position analysis and learning"
            }
          </p>
          <div className="flex justify-center gap-4 mt-2 text-xs text-muted-foreground">
            <span>Move: 1</span>
            <span>●</span>
            <span>White to play</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChessBoardMock;
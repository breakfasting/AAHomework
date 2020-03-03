class Board
  attr_accessor :cups, :curr_player

  def initialize(name1, name2)
    @cups = place_stones
    @player1 = name1
    @player2 = name2
    @curr_player = @player1
  end

  def place_stones
    cups = Array.new(14) { [] }
    cups.map.with_index do |cup, i|
      unless i == 6 || i == 13
        cup.fill(:stone, 0, 4)
      else
        cup
      end
    end
    # helper method to #initialize every non-store cup with four stones each
  end

  def valid_move?(start_pos)
    if start_pos == 6 || start_pos == 13 || start_pos < 0 || start_pos > 14
      raise "Invalid starting cup"
    else
      raise "Starting cup is empty" if cups[start_pos].empty?
    end
  end

  def make_move(start_pos, current_player_name)
    count = cups[start_pos].length
    cups[start_pos].delete(:stone)
    pos = start_pos
    curr_player = current_player_name
    while count > 0
      pos += 1
      unless (curr_player == @player1) ? pos == 13 : pos == 6
        cups[pos % 14] << :stone
        count -= 1
      end
    end
    render
    
    if cups[pos % 14].length > 1
      return pos % 14
    else
      next_turn(pos % 14)
    end
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    # p ending_cup_idx
    return :prompt if (curr_player == @player1) ? ending_cup_idx == 13 : ending_cup_idx == 6
    return :switch if cups[ending_cup_idx].length == 1
    
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    if cups[0..5].all? { |ele| ele.empty? } || cups[7..12].all? { |ele| ele.empty? }
      return true
    else
      return false
    end
  end

  def winner
    return :draw if cups[6].length == cups[13].length
    return cups[6].length > cups[13].length ? @player1 : @player2
  end
end

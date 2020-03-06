FISH_ARR = ["fish", "fiiish", "fiiiiish", "fiiiish", "fffish", "ffiiiiisshh", "fsh", "fiiiissshhhhhh"]

def sluggish_octopus
  longest_fish = ""
  FISH_ARR.each do |first_fish|
    FISH_ARR.each do |second_fish|
      if second_fish.length > first_fish.length
        longest_fish = second_fish
      end
    end
  end
  longest_fish
end

p sluggish_octopus

def dominant_octopus
  FISH_ARR.merge_sort.last
end

class Array
  def merge_sort(&prc)
    return self if length <= 1
    prc ||= Proc.new { |a, b| a.length <=> b.length }
    mid = length / 2

    left = self[0...mid].merge_sort(&prc)
    right = self[mid..-1].merge_sort(&prc)

    Array.merge(left, right, &prc)
  end

  def self.merge(left, right, &prc)
    merged = []

    until left.empty? || right.empty?
      if prc.call(left[0], right[0]) == 1
        merged << right.shift
      else
        merged << left.shift
      end
    end

    merged + left + right
  end
end

p dominant_octopus

def clever_octopus
  longest_fish = ""
  FISH_ARR.each do |fish|
    if fish.length > longest_fish.length
      longest_fish = fish
    end
  end
  longest_fish
end

p clever_octopus

# Dancing Octopus
tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]

def slow_dance(direction, tiles_array)
  tiles_array.each_with_index do |ele, i|
    return i if ele == direction
  end
  nil
end

p slow_dance("up", tiles_array)
p slow_dance("right-down", tiles_array)


new_tiles_data_structure = { "up" => 0, "right-up" => 1, "right" => 2, "right-down" => 3, "down" => 4, "left-down" => 5, "left" => 6, "left-up" => 7 }

def fast_dance(dir, tiles_hash)
  tiles_hash[dir]
end

p fast_dance("up", new_tiles_data_structure)
p fast_dance("right-down", new_tiles_data_structure)
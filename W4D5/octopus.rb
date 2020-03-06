FISH_ARR = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

def sluggish_octopus
  longest_fish = ''
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
  longest_fish = ''
  FISH_ARR.each do |fish|
    if fish.length > longest_fish.length
      longest_fish = fish
    end
  end
  longest_fish
end

p clever_octopus


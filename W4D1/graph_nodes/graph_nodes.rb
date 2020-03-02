class GraphNode

  attr_accessor :neighbors
  attr_reader :val

  def initialize(val)
    @val = val
    @neighbors = []
  end

  # def inspect
  #   @val.inspect
  # end


end

def bfs(start, target)
  visited = []
  queue = Queue.new
  queue.enq(start)
  until queue.empty?
    ele = queue.deq
    return ele if ele.val == target
    ele.neighbors.each do |neighbor|
      
      queue.enq(neighbor) unless visited.include?(neighbor)
      visited << neighbor
    end
  end
  nil
end

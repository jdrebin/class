def sort_me(remaining_list):
    if len(remaining_list) == 0:
        return None
    if len(remaining_list) == 1:
        return remaining_list
    lowest = remaining_list[0]
    indexed_at = 0
    for index, number in enumerate(remaining_list):
        if number < lowest:
            lowest = number
            indexed_at = index
    remaining_list.pop(indexed_at)
    return [lowest] + sort_me(remaining_list)

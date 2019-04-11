def amount_of_days_in_months():
    months = ['january', 'february', 'march', 'april', 'may', 'june',
              'july', 'august', 'september', 'october', 'november', 'december']
    days_in_months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    for month, amount in zip(months, days_in_months):
        print(month, amount)


def amount_of_days_in_months2():
    months = 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'
    days_in_months = 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    for month, amount in zip(months, days_in_months):
        print(month, amount)


def amount_of_days_in_months3():
    months = {
        'january': 31,
        'february': 28,
        'march': 31,
        'april': 30,
        'may': 31,
        'june': 30,
        'july': 31,
        'august': 31,
        'september': 30,
        'october': 31,
        'november': 30,
        'december': 31
    }
    for month in months:
        print(month, months[month])


amount_of_days_in_months()
amount_of_days_in_months2()
amount_of_days_in_months3()


def get_days_in_month(get_month):
    months = ['january', 'february', 'march', 'april', 'may', 'june',
              'july', 'august', 'september', 'october', 'november', 'december']
    days_in_months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    for month, amount in zip(months, days_in_months):
        if get_month == month:
            return amount
    else:
        return None


print(get_days_in_month('february'))

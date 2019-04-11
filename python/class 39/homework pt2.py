import itertools


class Bank:

    amount_of_accounts = itertools.count()

    def __init__(self, name=None):
        self.id = next(Bank.amount_of_accounts)
        self.name = name

    def set_name(self, name):
        self.name = name

    def get_name(self):
        return self.name

    def set_balance(self, balance):
        self.balance = balance

    def get_balance(self):
        return self.balance

    @classmethod
    def get_amount_of_accounts(cls):
        return cls.amount_of_accounts

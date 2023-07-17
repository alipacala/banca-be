import { Injectable } from '@nestjs/common'
import { Customer, Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CustomerCreateInput): Promise<Customer> {
    return this.prisma.customer.create({
      data,
    })
  }

  async findAll(params: {
    skip?: number
    take?: number
    cursor?: Prisma.CustomerWhereUniqueInput
    where?: Prisma.CustomerWhereInput
    orderBy?: Prisma.CustomerOrderByWithRelationInput
  }): Promise<Customer[]> {
    const { skip, take, cursor, where, orderBy } = params
    return this.prisma.customer.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    })
  }

  async findOne(
    customerWhereUniqueInput: Prisma.CustomerWhereUniqueInput
  ): Promise<Customer | null> {
    return this.prisma.customer.findUnique({
      where: customerWhereUniqueInput,
    })
  }

  async update(params: {
    where: Prisma.CustomerWhereUniqueInput
    data: Prisma.CustomerUpdateInput
  }): Promise<Customer> {
    const { where, data } = params
    return this.prisma.customer.update({
      data,
      where,
    })
  }

  async delete(where: Prisma.CustomerWhereUniqueInput): Promise<Customer> {
    return this.prisma.customer.delete({
      where,
    })
  }
}

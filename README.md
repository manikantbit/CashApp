# CMPE 281 - Team Hackathon Project

# Project Journal - Team SharkHead

## Members:

+ Manikant Prasad

# Project idea:

## Cash App prototype

Cash App is a seamless way to send money to anyone using just their email address. There are no middlemen to slow down the transaction, which is immediate. The functionalities are as follows:
> It consists of various modules such as Sign up, Log in, Add money, Withdraw money and Send money. The users are able to choose their unique Cash App id on registration.

## Project Architecture Diagram:
<img src="https://raw.githubusercontent.com/nguyensjsu/team281-sharkhead/master/Design/Design%20Architecture.jpg?token=AiMCxOPk_DlQ4he9S2NaSvCWzqZYhAnLks5a9llXwA%3D%3D">


> The front-end is developed in React which is hosted on Heroku. The back-end developed using NodeJS is divided in two ec2 instances, to split the functionalities. The login and signup functionality runs on one node and the transaction in another. Each of the functionalities are connected to each member's GO API which allows it to interact with the redis database in each cluster. The sessions are maintained in MongoDB on mLabs. Load balancers are added to make the system scalable.
 
## CAP Theorem

Distributed systems are characterized by exchanging state over high-latency or unreliable links. The system must be robust to both node and network failure if it is to operate reliably--however, not all systems satisfy the safety invariants we'd like. IP networks may arbitrarily drop, delay, reorder, or duplicate messages send between nodes--so many distributed systems use TCP to prevent reordered and duplicate messages. 

However, TCP/IP is still fundamentally asynchronous: the network may arbitrarily delay messages, and connections may drop at any time. Moreover, failure detection is unreliable: it may be impossible to determine whether a node has died, the network connection has dropped, or things are just slower than expected. This type of failure - where messages are arbitrarily delayed or dropped--is called a network partition. Partitions can occur in production networks for a variety of reasons: GC pressure, NIC failure, switch firmware bugs, misconfiguration, congestion, or backhoes, to name a few. 

Given that partitions occur, the **CAP theorem** restricts the maximally achievable guarantees of distributed systems. When messages are dropped, "consistent" **(CP)** systems preserve linearizability by rejecting some requests on some nodes. "Available" **(AP)** systems can handle requests on all nodes, but must sacrifice linearizability: different nodes can disagree about the order in which operations took place. Systems can be both consistent and available when the network is healthy, but since real networks partition, there are no fully **CA** systems.

<img src="https://i.stack.imgur.com/Hx8h0.png">

---
# Redis
Redis is a data structure server, typically deployed as a shared heap. Since it runs on one single-threaded server, it offers linearizable consistency by default: all operations happen in a single, well-defined order.

Redis also offers asynchronous primary->secondary replication. A single server is chosen as the primary, which can accept writes. It relays its state changes to secondary servers, which follow along. Asynchronous, in this context, means that clients do not block while the primary replicates a given operation - the write will "eventually" arrive on the secondaries.

# MongoDB

MongoDB actually is a trade-off between C, A and P, depending on both database/driver configuration and type of disaster: here's a visual recap, and below a more detailed explanation.

    Scenario                   | Main Focus | Description
    ---------------------------|------------|------------------------------------
    No partition               |     CA     | The system is available 
                               |            | and provides strong consistency
    ---------------------------|------------|------------------------------------
    Partition,                 |     AP     | Not synchronized writes 
    majority connected         |            | from the old primary are ignored                
    ---------------------------|------------|------------------------------------
    Partition,                 |     CP     | Only read access is provided
    majority not connected     |            | to avoid separated and inconsistent systems
Consistency:
MongoDB is strongly consistent when you use a single connection or the correct Write/Read Concern Level (Which will cost you execution speed). As soon as you don't meet those conditions (especially when you are reading from a secondary-replica) MongoDB becomes Eventually Consistent.

Availability:
MongoDB gets high availability through Replica-Sets. As soon as the primary goes down or gets unavailable else, then the secondaries will determine a new primary to become available again. There is an disadvantage to this: Every write that was performed by the old primary, but not synchronized to the secondaries will be rolled back and saved to a rollback-file, as soon as it reconnects to the set(the old primary is a secondary now). So in this case some consistency is sacrificed for the sake of availability.

Partition Tolerance:
Through the use of said Replica-Sets MongoDB also achieves the partition tolerance: As long as more than half of the servers of a Replica-Set is connected to each other, a new primary can be chosen. Why? To ensure two separated networks can not both choose a new primary. When not enough secondaries are connected to each other you can still read from them (but consistency is not ensured), but not write. The set is practically unavailable for the sake of consistency.

# Weekly progress
## Week 1:
* Decided the project idea and road-map.
* Decided what technology stack should be used.
* Went through multiple project ideas and discussed each one.
* Need to distribute tasks related to development to team members leveraging expertise knowledge.
* Discussed how each member's individual GO API would integrate into the project.
>Agenda: Road-map for Project and Task Distribution 

>Number of meeting hours this week: 2

## Week 2:
* Finally agreed on Cash App prototype.
* Finished wrapper API individually for database clusters.
* Reviewed as a team - Feasible timeline of tasks and responsibilities.
* Started coding for back-end.
>Agenda: To select the Application. Talk about API Document. Make Kanban Board to get the project done in desired timeline.

>Number of meeting hours this week: 2

## Week 3:
* Created a design architecture.
* Discussed how the functionalities will split.
* Integrated GO Data Service API.
* GO program setup and client connectivity.
* Front-end in React finished.
>Agenda: Design Architecture, Functional Split, Sharding, Replication stratgy.

>Number of meeting hours this week: 3

## Week 4:
* UI Improvements.
* Finished all the functionalities.
* Hosted the front-end on Heroku.
* Hosted the back-end on AWS.
* Connected MongoDB to maintain session.
* Added load balancers.
>Number of meeting hours this week: 5

## Week 5:
* Finished writing the Project Journal.
* Tested the performance of the Cash App prototype.
>Number of meeting hours this week: 1

# Challenges faced:
* Creating the design of the system.
* Set up the tools required for the application to work.
* Integrating front-end and back-end.
* Integrating GO APIs.
* Some conflicts in the code took significant amount of time to resolve.
* How to achieve functionality split.
* Code integration for Node and GO.
---
#### References, tools and technologies used:

##### [NodeJS](https://nodejs.org/en/) for back-end.
##### [React](https://reactjs.org/) for front-end.
##### [Video](https://www.youtube.com/watch?v=9S-mphgE5fA) referered to integrate Redis and Node.
##### [Draw.io](https://www.draw.io) to create diagrams.
##### [mLabs](https://mlab.com/) used to store sessions in MongoDB.
##### [AWS](https://aws.amazon.com/free/) for deployment.
##### [Heroku](https://www.heroku.com/) to deploy front-end.





